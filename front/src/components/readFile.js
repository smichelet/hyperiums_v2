import { useState, useEffect } from 'react';

export function ReadFile(fileName) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch(fileName)
      .then(response => response.text())
      .then(data => setFileContent(data))
      .catch(error => console.log(error));
  }, []);

  return fileContent;
}