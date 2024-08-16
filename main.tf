provider "aws" {
  region = "us-east-1"  # Update this to your preferred region
}

# Define the Elastic IP address
data "aws_eip" "existing" {
  # Replace this with your Elastic IP address allocation ID
  id = "eipalloc-0c0f2cba2f195207d"
}

# Define the security group
data "aws_security_group" "existing" {
  # Replace this with your security group ID
  id = "sg-04388e0ea98a4902f"
}

# Define the EC2 instance
resource "aws_instance" "my_instance" {
  ami           = "ami-03972092c42e8c0ca"  # Amazon Linux 2 AMI ID (update for your region)
  instance_type = "t2.micro"               # You can choose another instance type if needed

  # Attach the existing security group
  vpc_security_group_ids = [data.aws_security_group.existing.id]

  # Associate the Elastic IP
  associate_public_ip_address = true
  key_name = "DevOps-Keys"  # Replace with your key pair name

  # User data script to install Docker
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              echo "Test" >> /var/log/user_data.log 2>&1
              amazon-linux-extras install docker -y
              service docker start
              usermod -aG docker ec2-user
              echo "Running useradd command" >> /var/log/user_data.log 2>&1
              useradd ansadmin >> /var/log/user_data.log 2>&1
              echo "ansadmin:ans@123" | chpasswd >> /var/log/user_data.log 2>&1
              usermod -aG wheel ansadmin >> /var/log/user_data.log 2>&1
              sudo sed -i 's/^PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config
              EOF

  tags = {
    Name = "DockerTest"
  }
}

# Associate the Elastic IP address with the instance
resource "aws_eip_association" "eip_association" {
  instance_id   = aws_instance.my_instance.id
  allocation_id = data.aws_eip.existing.id
}
