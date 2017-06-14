#!groovy

node {
    stage ('Prepare') {
      checkout scm
    }
    //TODO: refactor master & prod branches to shared functions
    if ( env.BRANCH_NAME == 'jenkinsfile' ) {
      stage ('build') {
        try {
          sh 'bin/build.sh'
        } catch(err) {
            sh "bin/irc-notify.sh --stage 'build stage' --status 'failed'"
          throw err
        }
      }
      stage ('s3 sync') {
          try {
            sh "cd release && aws s3 sync . s3://irlpodcast-stage --acl public-read --delete --profile irl --exclude 'docs/*'"
          } catch(err) {
            sh "bin/irc-notify.sh --stage 's3 sync stage' --status 'failed'"
            throw err
          }
          sh "bin/irc-notify.sh --stage 's3 sync stage' --status 'shipped'"
      }
    } else if ( env.BRANCH_NAME == 'prod' ) {
      stage ('build') {
        try {
          sh 'bin/build.sh'
        } catch(err) {
            sh "bin/irc-notify.sh --stage 'build prod' --status 'failed'"
          throw err
        }
      }
      stage ('s3 sync') {
          try {
            sh "cd release && aws s3 sync . s3://irlpodcast --acl public-read --delete --profile irl --exclude 'docs/*'"
          } catch(err) {
            sh "bin/irc-notify.sh --stage 's3 sync prod' --status 'failed'"
            throw err
          }
          sh "bin/irc-notify.sh --stage 's3 sync prod' --status 'shipped'"
      }
    }
}
