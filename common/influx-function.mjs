import Influx from 'influx';
import dotenv from 'dotenv';

dotenv.config()

const dbName = 'natacaraATAPI';
const dataType = 'atResult';
const source = 'all-test'

const influx = new Influx.InfluxDB({
  host: process.env.URL_INFLUXDB,
  port: process.env.PORT_INFLUXDB,
  database: dbName,
  schema: [{
    measurement: dataType,
    fields: {
      totalTestSuites: Influx.FieldType.INTEGER,
      totalTestCases: Influx.FieldType.INTEGER,
      testSuitesFailed: Influx.FieldType.INTEGER,
      testSuitesPassed: Influx.FieldType.INTEGER,
      testCasesFailed: Influx.FieldType.INTEGER,
      testCasesPassed: Influx.FieldType.INTEGER,
      testCasesPending: Influx.FieldType.INTEGER,
      testCasesUndefined: Influx.FieldType.INTEGER,
      dataSource: Influx.FieldType.STRING,
    },
    tags: [
      'jobName',
    ],
  }],
});

influx.alterRetentionPolicy('autogen', {
  database: dbName,
  duration: '4w',
  replication: 1,
  default: false,
});

export const writeDataAll = (jsonReport) => {
  const jobName = 'all';
  influx.getDatabaseNames()
    .then((names) => {
      if (!names.includes(dbName)) {
        return influx.createDatabase(dbName);
      }
    })
    .catch((err) => {
      console.log(err);
      console.error('Error created Influx database!');
    })
    .then(() => {
      influx.writePoints([{
        measurement: dataType,
        tags: {
          jobName,
        },
        fields: {
          totalTestSuites: jsonReport.numFailedTestSuites + jsonReport.numPassedTestSuites,
          testSuitesFailed: jsonReport.numFailedTestSuites,
          testSuitesPassed: jsonReport.numPassedTestSuites,
          totalTestCases: jsonReport.numFailedTests + jsonReport.numPassedTests + jsonReport.numPendingTests,
          testCasesFailed: jsonReport.numFailedTests,
          testCasesPassed: jsonReport.numPassedTests,
          testCasesPending: jsonReport.numPendingTests,
          dataSource: source,
        },
      }]);
    });
};

export const writeDataJob = (daftarFolder) => {
  const jobName = daftarFolder.name;
  influx.getDatabaseNames()
    .then((names) => {
      if (!names.includes(dbName)) {
        return influx.createDatabase(dbName);
      }
    })
    .catch((err) => {
      console.log(err);
      console.error('Error created Influx database!');
    })
    .then(() => {
      influx.writePoints([{
        measurement: dataType,
        tags: { jobName },
        fields: {
          totalTestCases: daftarFolder.totalPass + daftarFolder.totalFail + daftarFolder.totalUndefined + daftarFolder.totalPending,
          testCasesFailed: daftarFolder.totalFail,
          testCasesPassed: daftarFolder.totalPass,
          testCasesPending: daftarFolder.totalPending,
          testCasesUndefined: daftarFolder.totalUndefined,
          dataSource: source,
        },
      }]);
    });
};
