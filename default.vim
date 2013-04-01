" ~/Desktop/js-injector/default.vim: Vim session script.
" Created by session.vim 1.5 on 30 March 2013 at 15:52:05.
" Open this file in Vim and run :source % to restore your session.

set guioptions=aegimrLt
silent! set guifont=
if exists('g:syntax_on') != 1 | syntax on | endif
if exists('g:did_load_filetypes') != 1 | filetype on | endif
if exists('g:did_load_ftplugin') != 1 | filetype plugin on | endif
if exists('g:did_indent_on') != 1 | filetype indent on | endif
if &background != 'light'
	set background=light
endif
call setqflist([])
let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 Desktop/js-injector/README.md
badd +1 Desktop/js-injector/AUTHORS.md
badd +1 Desktop/js-injector/COPYING
badd +13 Desktop/js-injector/manifest.json
badd +1 .vim/vimrc
args Desktop/js-injector/README.md
set lines=43 columns=123
edit Desktop/js-injector/README.md
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
2wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 31 + 61) / 123)
exe '2resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 2resize ' . ((&columns * 91 + 61) / 123)
exe '3resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 3resize ' . ((&columns * 91 + 61) / 123)
exe '4resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 4resize ' . ((&columns * 91 + 61) / 123)
argglobal
enew
" file NERD_tree_1
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
lcd ~/Desktop/js-injector
wincmd w
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Desktop/js-injector
wincmd w
argglobal
edit ~/.vim/vimrc
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 44 - ((7 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
44
normal! 021l
lcd ~/Desktop/js-injector
wincmd w
argglobal
edit ~/Desktop/js-injector/AUTHORS.md
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Desktop/js-injector
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 31 + 61) / 123)
exe '2resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 2resize ' . ((&columns * 91 + 61) / 123)
exe '3resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 3resize ' . ((&columns * 91 + 61) / 123)
exe '4resize ' . ((&lines * 13 + 21) / 43)
exe 'vert 4resize ' . ((&columns * 91 + 61) / 123)
tabnext 1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
tabnext 1
1wincmd w
let s:bufnr = bufnr("%")
NERDTree ~/Desktop/js-injector
execute "bwipeout" s:bufnr
1resize 41|vert 1resize 31|2resize 13|vert 2resize 91|3resize 13|vert 3resize 91|4resize 13|vert 4resize 91|
tabnext 1
3wincmd w

" vim: ft=vim ro nowrap smc=128
