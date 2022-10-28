import React, { useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from './../firebase';
import { useEffect } from 'react';

const AuthProvider = () => {
	const auth = getAuth(app);
	const [user, setUser] = useState(auth.currentUser);
	console.log(user);

	useEffect(() => {
		const unsubscr = auth.onAuthStateChanged((maybeUser) => {
			if (maybeUser != null) {
				return setUser(maybeUser);
			}

			signInWithPopup(auth, googleAuthProvider)
				.then(credentials => setUser(credentials.user))
				.catch(e => console.error(e));
		});

		return unsubscr;

	}, [auth]);

	return (
		user != null ? <>{ user.displayName }</> : <>loading</>
	);
};

export default AuthProvider;