tns prepare android

cd platforms/android
./gradlew assembleDebug assembleAndroidTest -PcompileSdk=android-29 -PtargetSdk=29 -PbuildToolsVersion=29.0.2 -PgenerateTypings=false -PgatherAnalyticsData=false -DtestBuildType=debug
cd -
