variable "region" {
  default     = "eu-west-1"
  description = "AWS region"
  type        = string
}

variable "hyperiums_password" {
  default     = "dM8K@mLyM_jk"
  description = "Hyperiums password"
  type        = string
}

variable "lambda_function_name_hyperiums" {
  default     = "hyperiums_getData"
  description = "Name of the S3 bucket for Hyperiums website storage"
  type        = string
}

variable "s3_bucket_name_hyperiums" {
  default     = "woot-hyperiums"
  description = "Name of the S3 bucket for Hyperiums website storage"
  type        = string
}