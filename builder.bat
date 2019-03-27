set tvip=192.168.0.114
set appName=InkubatorBeta
set packageId=FYEPxWQpTx
set appId=%packageId%.%appName%
set modelCode=UE32M5650
cls
call gulp copy
call sdb connect %tvip%
call tizen build-web -- export/
call tizen package -t wgt -s srpol -- export/.buildResult
call xcopy /Y /I "export\.buildResult\%appName%.wgt" "export"
call tizen clean -- export
call tizen install -n %appName%.wgt -t %modelCode% -- "export"
call sdb shell 0 debug %appId% 300