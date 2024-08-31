@echo off

call npm uninstall @bdsoftware/ts-utils
call npm uninstall typescript
call npm uninstall axios

call npm i typescript@latest --save-dev
call npm i axios
call npm i github:BDSoftwareCommunity/ts-utils
