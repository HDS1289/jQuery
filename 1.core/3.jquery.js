$('#myId') //myid라는 id를 가진 selector가 parameter가 된다.

$('.myClass') //class selector

$('input[name="surname"]')

$('#contents ul.people li')

/*
<div id='contents'>
    <ul class='people'>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')

/*
<a class='external'></a>
*/

$('li:odd') //홀수 번째의 인덱스에 해당하는 li tag를 찾아라.

$('div:animated')

$('a[ref$="thinger"]') // attribute selector, ~=, *=, ^=, $=, |=

$('div.foo').find('p')

$('div.foo').has('p')

$('ul li').filter('.current')

$('ul li').not('.current')

//

$('form :button') // => button like <button> <input type='button'/>

$('form :radio') // => radio like <input type='radio'/>

$('form :checkbox') // => <input type='checkbox'/>

$('form :checked')

$('form :selected')

$('form :enabled')

$('form :disabled')

$('form :file')

$('form :input') //사용자가 폼을 작성 못하게 막을 수 있다.

$('form :text')

$('form :password')

$('form input[name="gender"]:radio') //<input type='radio' name='gender'/>

$('form :reset') // <input type='reset'></input>

$('form :submit') // <input type='submit'></input>