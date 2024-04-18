import React from 'react';

import Image from 'next/image';

const SubHeading = ({ title }) => (
	<div style={{ marginBottom: "1rem" }}>
		<p className="p__cormorant">{title}</p>
		<Image src="/spoon.svg" alt="spoon_image" className="spoon__img" />
	</div>
);


export default SubHeading;
