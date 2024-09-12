// ** React Imports
import { ReactNode, useEffect, useState } from "react";

// ** Third Party Components

const ScrollTop: React.FC<ScrollTopType> = (props) => {
	// ** Props
	const { showOffset, scrollBehaviour, children, ...rest } = props;

	// ** State
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (window) {
			window.addEventListener("scroll", () => {
				if (window.pageYOffset >= showOffset) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			});
		}
	}, []);

	const handleScrollToTop = (): void => {
		window.scroll({ top: 0, behavior: scrollBehaviour } as any);
	};

	return visible ? (
		<div
			className="scroll-to-top"
			onClick={handleScrollToTop}
			//{...rest}
		>
			{children}
		</div>
	) : (
		<></>
	);
};

export default ScrollTop;

type ScrollTopType = {
	showOffset: number;
	scrollBehaviour?: "smooth" | "instant" | "auto";
	children: ReactNode;
	className?: string;
};

ScrollTop.defaultProps = {
	scrollBehaviour: "smooth",
};
