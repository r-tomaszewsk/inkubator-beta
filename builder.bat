call tizen build-web -- ".\export"
call cd export
call tizen package -t wgt -s haslo123 -- ".buildResult"
call mv .buildResult ..\.buildResult
call cd ..
call sdb connect 192.168.0.108
call sdb push .buildResult\InkubatorBeta.wgt /home/owner/share/tmp/sdk_tools/tmp/
call sdb shell 0 vd_appinstall appis /home/owner/share/tmp/sdk_tools/tmp/InkubatorBeta.wgt
call sdb shell 0 debug FYEPxWQpTx.InkubatorBeta 300