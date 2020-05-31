---
id: cloning-and-installing
title: Cloning and Installing
sidebar_label: Cloning and Installing
---

### Build prerequisites

You need to have the following tools installed on your computer
+ [Git](https://git-scm.com)
+ [Go](https://golang.org/dl/)

### Unix/Linux

#### Debian based distributions (Debian / Ubuntu / Linux Mint / elementary OS)
In your terminal
``` bash
sudo apt-get install -y golang-go build-essential git
```

#### Enterprise based distributions (Red Hat® / CentOS / CloudLinux / Fedora)
In your terminal
``` bash
sudo yum install -y golang git
```
### Windows
#### Installing Git
1. Open [Git Downloads page](https://git-scm.com/downloads)
2. Download the Windows Installer(.exe)
3. Run the downloaded _Git-v.exe_ Installer

#### Installing Go
1. Open [Go Downloads page](https://golang.org/dl/)
2. Download the Windows Installer(.msi)
3. Run the downloaded MSI Installer


### Mac OS X
In your terminal
``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install git
brew install go
```
### Getting the source
In your terminal
``` bash
# Clone Gearbox's repository
git clone https://github.com/gogearbox/gearbox
```