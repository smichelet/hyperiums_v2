terraform {
  backend "s3" {
    bucket = "woot-terraform"
    key    = "hyperiums/hyperiums.tfstate"
    region = "eu-west-1"
  }
}