acer@DESKTOP-B7DNH1D MINGW64 ~ (master)
$ cd d:

acer@DESKTOP-B7DNH1D MINGW64 /d
$ mkdir 534

acer@DESKTOP-B7DNH1D MINGW64 /d
$ cd 534

acer@DESKTOP-B7DNH1D MINGW64 /d/534
$ cat > a.txt
this is first line in a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534
$ git init
Initialized empty Git repository in D:/534/.git/

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git config user.email "123@gmail.com"

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git config user.name "pavan"

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git add .
warning: in the working copy of 'a.txt', LF will be replaced by CRLF the next time Git touches it

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   a.txt


acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git commit -m "a.txt with one line"
[master (root-commit) 9330ebb] a.txt with one line
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ vim a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt

no changes added to commit (use "git add" and/or "git commit -a")

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git add .
warning: in the working copy of 'a.txt', LF will be replaced by CRLF the next time Git touches it

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   a.txt


acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ vim a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git restore --staged a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt

no changes added to commit (use "git add" and/or "git commit -a")

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ vim a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git restore a.txt

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ git status
On branch master
nothing to commit, working tree clean

acer@DESKTOP-B7DNH1D MINGW64 /d/534 (master)
$ vim a.txt