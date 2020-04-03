import { create, tsx } from "@dojo/framework/core/vdom";

const factory = create();

export const Bar = factory(function Bar() {
    return <div styles={{backgroundColor: 'magenta'}}>
        I am a bar child!
    </div>;
});

export default Bar;