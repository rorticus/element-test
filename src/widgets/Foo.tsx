import { create, tsx } from "@dojo/framework/core/vdom";

export interface FooProperties {
    num?: number;
}

const factory = create().properties<FooProperties>();

export const Foo = factory(function Foo({ children, properties }) {
    const { num = 0 } = properties();

    return <div styles={{ border: '1px solid black' }}>
        <h2>My number is {num}</h2>
        {children()}
    </div>;
});

export default Foo;