# Introduction 
This repository is used to store usefull tools, created for specific needs.

# 1. FixPDFsWithNoTitle
This tool is used to update PDFs that have no title metadata and can be used both in S3 (AWS) or locally. 
The title is set with the file name:
	- locally -> obtained via Directory.GetFiles
	- S3 -> obtained from DB - 'ProcessoFicheiro' table.
	
Input args:
	.0 - ReviewOption -> The tool and be used to both analyze or update the files. The value is set according to the following enum:
		- reviewLocalFiles = 0
		- UpdateLocalFiles = 1
		- reviewS3Files = 2
		- UpdateS3Files = 3
		
	Locally (option 0 & 1)
	.1 - localPath
	
	S3 (AWS)
	.1 - AmazonS3AccessKeyId
	.2 - AmazonS3SecretAccessKey
	.3 - AmazonS3BucketName
	.4 - AmazonS3BasePath
	.5 - ConnectionString (to the respective DB)
	.6 - (Optional) AmazonS3ServiceUrl
