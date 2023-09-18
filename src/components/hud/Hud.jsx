import React from "react"

const Hud = ({ hudMatrix : [options], focusedElement, focusedOption, loading }) => {

	return (
		<div
			className="w-full h-64 mb-auto p-4
							text-white text-sm text-center font-mono bg-neutral-800 rounded-xl"
		>
			{loading ? (
				<p>Loading the content. Please be patient...</p>
			) : (
				<>
					<p>{focusedElement?.name}</p>
					<div className="flex flex-col">
						{options?.map(option => (
							<div className="flex justify-between">
								<p>{option.displayName}</p>
								{focusedOption.id === option.id ? <span>◼</span> : <span></span>}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Hud