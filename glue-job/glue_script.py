# type: ignore

import sys
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext

args = getResolvedOptions(sys.argv, ['JOB_NAME'])
sc = SparkContext()
glueContext = GlueContext(sc)

# Leer desde S3
datasource = glueContext.create_dynamic_frame.from_options(
    connection_type = "s3",
    connection_options = {"paths": ["s3://my-bucket/input"]},
    format = "json"
)

# Escribir en S3
glueContext.write_dynamic_frame.from_options(
    frame = datasource,
    connection_type = "s3",
    connection_options = {"path": "s3://my-bucket/output"},
    format = "parquet"
)
