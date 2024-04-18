"use client"
import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const vidRef = useRef(null);

	const togglePlay = () => {
		const video = vidRef.current;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="app__video">
			<video
				ref={vidRef}
				src="/meal.mp4"
				type="video/mp4"
				loop
				controls={false}
				muted
			/>
			<div className="app__video-overlay flex__center" onClick={togglePlay}>
				<div className="app__video-overlay_circle flex__center">
					{isPlaying ? (
						<BsPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
