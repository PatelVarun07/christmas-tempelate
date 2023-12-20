import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
export default function PrticalBg() {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadFull(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(() => ({
		fullScreen: {
			zIndex: 1,
		},
		fpsLimit: 120,
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onHover: {
					enable: true,
					mode: "repulse",
				},
			},
			modes: {
				push: {
					quantity: 4,
				},
				repulse: {
					distance: 100,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: "#ffffff",
			},
			links: {
				color: "#ffffff",
				distance: 100,
				enable: false,
				opacity: 0.5,
				width: 1,
			},

			move: {
				direction: "bottom",
				enable: true,
				outModes: {
					default: "out",
				},
				random: false,
				speed: 6,
				straight: true,
			},
			number: {
				density: {
					enable: true,
				},
				value: 300,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: "circle",
			},
			size: {
				value: { min: 1, max: 5 },
			},
		},
		detectRetina: true,
	}));
	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
}
