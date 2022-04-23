import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from 'portal/services/auth.service';
import AuthLoader from 'portal/layouts/AuthLoader';
import { useSnackbar } from 'notistack';

const PrivateRouteWithLayout = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [authed, setAuthed] = React.useState(null);

    React.useEffect(() => {
		let mounted = true;

        (async function() {
            try {
                let user = await AuthService.getAuthedUser();
                if (user) {
                    if(mounted) setAuthed(true);
                } else {
                    if(mounted) setAuthed(false);
                }
            } catch (e) {
                //console.log('status check error', e);
                enqueueSnackbar('Not authenticated', {
                    variant: 'warning'
                });
                if(mounted) setAuthed(process.env.NODE_ENV === "production" ? false : true);
            }
        })();
        return () => {
			mounted = false;
        };
        //eslint-disable-next-line
	}, [Component]);

    return authed === true ? (
        <Route
            {...rest}
            render={matchProps => (
                <Layout>
                    <Component  {...rest} {...matchProps} />
                </Layout>
            )}
        />
    ) : authed === false ? (
        <Redirect to="/sign-in" />
    ) : (
        <Route
            {...rest}
            render={() => (
                <Layout>
                    <AuthLoader />
                </Layout>
            )}
        />
	);
};

PrivateRouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default PrivateRouteWithLayout;
