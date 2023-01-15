import type { FC, ReactNode, PropsWithChildren } from 'react';
/* 
export type PProps = {
	children?: ReactNode;
};
 */

/* 
export default function P() {
	return <div>P</div>;
}
 */

/* 
const P: FC<PProps> = props => {
	const { children } = props;
	// return <p children={children} />;
	return <p {...props} />;
};
 */

/*
PropsWithChildren 타입과 children 속성 : React는 17 version까지는 children 속성을 FC type에 포함했지만
                                        18 version부터는 FC typedptj children 속성을 제거했다.
                                        그리고 PropsWithChildren이라는 Generic type을 새롭게 제공하여
                                        children?: ReactNode 부분을 PropsWithChildren type으로 대체했다.
*/

export type PProps = {};

const P: FC<PropsWithChildren<PProps>> = props => {
	return <p {...props} />;
};

export default P;
