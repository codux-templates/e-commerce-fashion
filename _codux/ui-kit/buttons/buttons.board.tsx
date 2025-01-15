import { Kit } from '../ui-kit-utils/kit';
import classNames from 'classnames';

import styles from './buttons.board.module.scss';
import { createBoard, Variant } from '@wixc3/react-board';
import Icon from '~/src/components/icons/icon';

export default createBoard({
    name: 'Buttons & Icons',
    Board: () => (
        <Kit category="Core Components" title="Buttons & Icons">
            <Kit.Section title="Buttons" className={styles.demoWidth}>
                <Kit.Item>
                    <Variant name="Primary Button">
                        <button className="button">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Primary Button</Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Primary Muted Button">
                        <button className="button muted">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Primary Muted Button</Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Secondary Button">
                        <button className="button button-secondary">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Secondary Button</Kit.Description>
                </Kit.Item>
            </Kit.Section>

            <Kit.Section title="Icons">
                <Kit.Description>
                    You can use any Material Symbols icon from the Material Symbols library.
                </Kit.Description>
                <div className={styles.itemsGroup}>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Cart Icon">
                                <Icon name="shopping_bag" />
                            </Variant>
                        </div>
                        <Kit.Description>Cart</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Trash Icon">
                                <Icon name="delete" />
                            </Variant>
                        </div>
                        <Kit.Description>Trash</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Lock Icon">
                                <Icon name="lock" />
                            </Variant>
                        </div>
                        <Kit.Description>Lock</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Error Icon">
                                <Icon name="error" />
                            </Variant>
                        </div>
                        <Kit.Description>Error</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={classNames(styles.icon, styles.menuIcon)}>
                            <Variant name="Menu Icon">
                                <Icon name="menu" />
                            </Variant>
                        </div>
                        <Kit.Description>Menu</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Chevron Icon">
                                <Icon name="chevron_right" />
                            </Variant>
                        </div>
                        <Kit.Description>Chevron</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Arrow Icon">
                                <Icon name="arrow_right" />
                            </Variant>
                        </div>
                        <Kit.Description>Arrow</Kit.Description>
                    </Kit.Item>
                </div>
            </Kit.Section>
        </Kit>
    ),
    environmentProps: {
        windowWidth: 430,
        windowHeight: 700,
    },
    isSnippet: true,
});
