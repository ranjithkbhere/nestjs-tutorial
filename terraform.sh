echo Adding AWS environment variables;
#Add AWS Credentials here
pwd;
echo Changing directory;
cd ${WORKSPACE};
terraform init;
terraform plan;
terraform apply --auto-approve;
echo Terraform script completed!;