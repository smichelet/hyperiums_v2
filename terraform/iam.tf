resource "aws_iam_role" "lambda_hyperiums_getData" {
  name = "lambda_${var.lambda_function_name_hyperiums}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lambda_hyperiums_getData" {
  name = "lambda_${var.lambda_function_name_hyperiums}"
  role = aws_iam_role.lambda_hyperiums_getData.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:ListBucket",
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject"
        ]
        Effect   = "Allow"
        Resource = "${module.s3_hyperiums.s3_bucket_arn}/data/*"
      },
      {
        Action = [
          "logs:CreateLogGroup",
        ]
        Effect   = "Allow",
        Resource = "arn:aws:logs:${var.region}:${data.aws_caller_identity.current.account_id}:*"
      },
      {
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Effect   = "Allow",
        Resource = [
          "arn:aws:logs:${var.region}:${data.aws_caller_identity.current.account_id}:log-group:/aws/lambda/${var.lambda_function_name_hyperiums}:*"
        ]
      },
      {
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Effect   = "Allow"
        Resource = "${aws_secretsmanager_secret.hyperiums_password.id}"
      }
    ]
  })
}