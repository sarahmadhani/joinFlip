export const loginVerify = (param) => ({
    mutation: {
        loginVerify: {
            __args: param,
            stage: true,
            user: {
                id: true,
                provider: true,
                username: true,
                email: true,
                phonenumber: true,
                profile: {
                    firstname: true,
                    lastname: true,
                    address: true,
                    phonenumber: true,
                    gender: true,
                    birthdate: true,
                    birthplace: true,
                    hobby: true,
                },
                updatedAt: true,
            },
            authPayload:{
                tokenType: true,
                expiresIn: true,
                scope: true,
                accessToken: true,
                refreshToken: true,
                idToken: true,
            }
        },
    },
});
