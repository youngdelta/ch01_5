/**
 * addEventListener 사용법
 * DOM_객체.addEventListener(이벤트_이름 : string, 콜백_함수 : (e: Event) => void)
 *
 * window.addEventListener('click', (e: Event) => console.log('mouse click occurs.))
 */

document.getElementById('root')?.addEventListener('click', (e: Event) => {
	const { isTrusted, target, bubbles } = e;
	console.log('mouse click occurs.', isTrusted, target, bubbles);

	/* 
	if (e.target === e.currentTarget) {
		e.preventDefault();
		e.stopPropagation();
	} else {
		e.preventDefault();
		e.stopPropagation();
	} 
	*/
});

document.getElementById('root')?.addEventListener('click', (e: Event) => {
	const { isTrusted, target, bubbles } = e;
	console.log('mouse click also occurs.', isTrusted, target, bubbles);
});

export default function EventListener() {
	return <div>EventListener</div>;
}
