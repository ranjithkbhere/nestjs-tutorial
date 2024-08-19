#echo Adding AWS environment variables;
#Add AWS Credentials here
echo Changing directory;
cd ${WORKSPACE};
terraform init;
terraform plan;
terraform apply --auto-approve;
echo Terraform script completed!;