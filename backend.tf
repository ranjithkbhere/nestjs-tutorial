terraform {
  backend "s3" {
    bucket         = "ranjithkumarb-terraform-bucket"          # Replace with your S3 bucket name
    key            = "terraform/state/terraform.tfstate" # Path to your state file within the bucket
    region         = "us-east-1"                     # Replace with your AWS region
    #dynamodb_table = "terraform-lock-table"          # Replace with your DynamoDB table name (optional)
    encrypt        = true                            # Enable server-side encryption
  }
}