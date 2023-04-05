resource "aws_secretsmanager_secret" "hyperiums_password" {
  name = "hyperiums_password"
}

resource "aws_secretsmanager_secret_version" "hyperiums_password" {
  secret_id     = aws_secretsmanager_secret.hyperiums_password.id
  secret_string = var.hyperiums_password
}