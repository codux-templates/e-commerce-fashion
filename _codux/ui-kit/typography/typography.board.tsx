import { createBoard, Variant } from '@wixc3/react-board';
import { Kit } from '../ui-kit-utils/kit';

export default createBoard({
    name: 'Typography',
    Board: () => (
        <Kit category="Foundation" title="Typography">
            <Kit.Section title="Heading">
                <Kit.Item>
                    <Variant name="Heading1">
                        <h1 className="heading1">Heading 1</h1>
                    </Variant>
                    <Kit.Description>
                        <b>--heading1:</b> DM Sans / 600 / 48px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading2">
                        <h2 className="heading2">Heading 2</h2>
                    </Variant>
                    <Kit.Description>
                        <b>--heading2:</b> Inter / 600 / 32px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading3">
                        <h3 className="heading3">Heading 3</h3>
                    </Variant>
                    <Kit.Description>
                        <b>--heading3:</b> DM Sans / 600 / 28px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading4">
                        <h4 className="heading4">Heading 4</h4>
                    </Variant>
                    <Kit.Description>
                        <b>--heading4:</b> DM Sans / 600 / 20px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Subheading">
                        <div className="subheading">Subheading</div>
                    </Variant>
                    <Kit.Description>
                        <b>--subheading:</b> DM Sans / 600 / 16px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Display">
                        <div className="display">Display</div>
                    </Variant>
                    <Kit.Description>
                        <b>--display:</b> DM Sans / 600 / 28px / 36px
                    </Kit.Description>
                </Kit.Item>
            </Kit.Section>

            <Kit.Section title="Paragraph">
                <Kit.Item>
                    <Variant name="body1">
                        <div className="body1">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--body1:</b> DM Sans / 400 / 16px / 24px
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="body1Caps">
                        <div className="body1-caps">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--body1-caps:</b> DM Sans / 500 / 16px / 20px
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Body2">
                        <div className="body2">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--body2:</b> DM Sans / 400 / 14px / 20px
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Body2Caps">
                        <div className="body2-caps">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--body2-caps:</b> DM Sans / 500 / 14px / 20px
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Body3">
                        <div className="body3">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--body3:</b> DM Sans / 400 / 12px / 16px
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Action">
                        <a href={'#'} className="action">
                            Action
                        </a>
                    </Variant>
                    <Kit.Description>
                        <b>--action:</b> DM Sans / 600 / 14px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Navlink">
                        <a href={'#'} className="navlink">
                            Navlink
                        </a>
                    </Variant>
                    <Kit.Description>
                        <b>--navlink:</b> Inter / 400 / 14px / 20px
                    </Kit.Description>
                </Kit.Item>
            </Kit.Section>
        </Kit>
    ),
    environmentProps: {
        windowWidth: 450,
        windowHeight: 700,
    },
    isSnippet: true,
});
