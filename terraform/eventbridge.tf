module "eventbridge_hyperiums_getData" {
  source                  = "terraform-aws-modules/eventbridge/aws"
  version                 = "1.17.3"

  append_rule_postfix     = false
  create_bus              = false
  create_role             = false

  rules = {
    hyperiums_getData = {
      description         = "hyperiums_getData rule"
      schedule_expression = "cron(30 8 * * ? *)"
      enabled             = true
    }
  }

  targets = {
    hyperiums_getData = [
      {
        name              = "hyperiums_getData target"
        arn               = aws_lambda_function.hyperiums_getData.arn
      }
    ]
  }
}

resource "aws_lambda_permission" "hyperiums_getData" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hyperiums_getData.arn
  principal     = "events.amazonaws.com"
  source_arn    = module.eventbridge_hyperiums_getData.eventbridge_rule_arns.hyperiums_getData
  statement_id  = "AllowExecutionFromEventBridge_${module.eventbridge_hyperiums_getData.eventbridge_rule_ids.hyperiums_getData}"
}