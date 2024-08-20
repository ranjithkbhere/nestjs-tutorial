#Add AWS Credentials here
echo Test
echo Changing directory;
cd ${WORKSPACE};
terraform init;
terraform plan;
terraform apply --auto-approve;
echo Terraform script completed!;