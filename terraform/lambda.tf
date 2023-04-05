data "archive_file" "hyperiums_getData" {
  type        = "zip"
  output_path = "${path.module}/lambda/hyperiums_getData.zip"
  source_dir  = "${path.module}/lambda/hyperiums_getData"
}

resource "aws_lambda_function" "hyperiums_getData" {
  function_name    = var.lambda_function_name_hyperiums
  role             = aws_iam_role.lambda_hyperiums_getData.arn
  runtime          = "nodejs18.x"

  filename         = "${path.module}/lambda/hyperiums_getData.zip"
  publish          = true
  source_code_hash = data.archive_file.hyperiums_getData.output_base64sha256

  description      = "Lambda function to get daily data from Hyperiums and push it to our S3 bucket"
  handler          = "${var.lambda_function_name_hyperiums}.handler"
  memory_size      = 128
  timeout          = 3

  tags = {
    Name = var.lambda_function_name_hyperiums
  }
}