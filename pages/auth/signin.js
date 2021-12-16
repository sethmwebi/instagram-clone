import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

const signin = ({ providers }) => {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
				<img src="https://links.papareact.com/ocw" className="w-80" alt=""/>
				<div className="mt-50">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 bg-blue-500 rounded-lg text-white"
								onClick={() => signIntoProvider(provider.id,{ callbackUrl: '/'})}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default signin;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
