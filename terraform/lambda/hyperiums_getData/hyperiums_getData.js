import fetch from 'node-fetch';
import { S3 } from '@aws-sdk/client-s3';
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import zlib from 'zlib';

const s3 = new S3();
const secretsManager = new SecretsManager();

async function handler(event, context) {
  const bucketName = 'woot-hyperiums';
  const objectKey = 'data/planets.txt';
  const passwordSecret = 'hyperiums_password';
  const username = 'WoooooT';

  try {
    // Récupère le mot de passe du compte Hyperiums dans AWS Secret Manager
    const secret = await secretsManager.getSecretValue({ SecretId: passwordSecret });

    // Construit l'URL pour télécharger le fichier d'Hyperiums
    const downloadURL = `https://www.hyperiums.com/servlet/HAPI?game=Hyperiums14&player=` + username + `&passwd=${secret.SecretString}&request=download&filetype=planets`;

    // Exécute l'appel de l'URL
    const downloadResponseCall = await fetch(downloadURL);
    const downloadResponseBuffer = await downloadResponseCall.buffer();

    // Décompresse le résultat
    const unzippedBuffer = zlib.gunzipSync(downloadResponseBuffer);

    // Envoie le résultat sur S3
    const s3Response = await s3.putObject({
      Bucket: bucketName,
      Key: objectKey,
      Body: unzippedBuffer
    });

    // Met l'ACL de l'objet S3 en public
    await s3.putObjectAcl({
      Bucket: bucketName,
      Key: objectKey,
      ACL: 'public-read'
    });

    console.log(`File ${objectKey} uploaded to bucket ${bucketName}`);

  } catch (err) {
    console.log('Error:', err);
  }
};

export { handler };