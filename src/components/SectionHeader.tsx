import {motion} from 'framer-motion'
import {StarBurst, Ribbon, SplashTitle} from './abstract'

interface Props {
    index: string;
    title: string;
    kicker?: string;
}

const SectionHeader = ({index, title, kicker}: Props) => {
    return (
        <div className='relative mb-20'>
            <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-center gap-4 mb-4"
            >
                <Ribbon color="electric" skew={-10}>
                <span className="font-display tracking-widest text-sm">/// {index}</span>
                </Ribbon>
                {kicker && (
                <span className="font-mono text-xs tracking-[0.4em] text-muted-foreground uppercase">
                    {kicker}
                </span>
                )}
            </motion.div>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="relative inline-block"
            >
                <SplashTitle className="text-6xl md:text-8xl">{title}</SplashTitle>
                <StarBurst className="absolute -top-6 -right-10 w-12 h-12 opacity-80" />
            </motion.div>
        </div>
    )
}

export default SectionHeader