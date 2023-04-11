resource "aws_cloudwatch_log_group" "hyperiums_getData" {
  name = "/aws/lambda/hyperiums_getData"
  retention_in_days = 7
}