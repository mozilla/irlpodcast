#!groovy

def buildSite(destination) {
    stage ('build') {
      try {
        sh "bin/build.sh " + destination
      } catch(err) {
        sh "bin/irc-notify.sh --stage 'build " + env.BRANCH_NAME + "' --status 'failed'"
        throw err
      }
    }
}

def syncS3(String bucket) {
    stage ('s3 sync') {
        try {
          sh "cd release && aws s3 sync . s3://" + bucket + " --acl public-read --delete --profile irl"
        } catch(err) {
          sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'failed'"
          throw err
        }
        sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'shipped'"
    }
}

def syncGhPages() {
    stage ('sync gh-pages branch') {
        try {
          sh "bin/push-gh-pages.sh"
        } catch(err) {
          sh "bin/irc-notify.sh --stage 'gh-pages branch sync' --status 'failed'"
          throw err
        }
        sh "bin/irc-notify.sh --stage 'gh-pages branch sync' --status 'shipped'"
    }
}

node {
    stage ('Prepare') {
      checkout scm
    }
    if ( env.BRANCH_NAME == 'master' ) {
      buildSite('stage')
      syncS3('irlpodcast-stage')
    } else if ( env.BRANCH_NAME == 'prod' ) {
      buildSite('prod')
      syncS3('irlpodcast')
    } else if ( env.BRANCH_NAME == 'dev' ) {
      buildSite('dev')
      syncGhPages()
    }
}
