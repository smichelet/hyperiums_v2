module "s3_hyperiums" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.8.2"

  bucket = var.s3_bucket_name_hyperiums
  acl    = "private"

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false

  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm     = "AES256"
      }
    }
  }

  versioning = {
    enabled = false
  }

  website = {
    index_document = "index.html"
  }

  tags = {
    Name = var.s3_bucket_name_hyperiums
  }
}