import { create, tsx } from '@dojo/framework/core/vdom';

import * as css from './styles/About.m.css';

export interface AboutProperties {
	onDoThing: () => void;
}

const factory = create().properties<AboutProperties>();

export default factory(function Profile({ properties }) {
	return <h1 classes={[css.root]} onclick={() => {properties().onDoThing();}}>About PAge</h1>;
});
