import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/DeaxTV/repos', {
            headers: {
                'Authorization': 'token '+ process.env.gittoken
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};