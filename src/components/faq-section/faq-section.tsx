import { Accordion } from '~/src/components/accordion/accordion';
import styles from './faq-section.module.scss';

interface FAQSectionProps {
    items: { question: string; answer: string }[];
}

export const FAQSection = ({ items }: FAQSectionProps) => {
    return (
        <div className={styles.root}>
            <h4 className={'uppercase'}>FAQ</h4>
            <Accordion
                className={styles.accordion}
                items={items.map((item) => ({
                    header: <div className={styles.question}>{item.question}</div>,
                    content: <div className={styles.answer}>{item.answer}</div>,
                }))}
                initialOpenItemIndex={0}
            />
        </div>
    );
};
