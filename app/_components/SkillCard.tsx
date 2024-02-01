import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';

interface SkillCardProps {
    skill: string;
    delay?: number;
  }

const SkillCard = ({skill, delay = 0}: SkillCardProps) => {
  return (
    <motion.div animate={{ x: delay }}>
    <Card sx={{ bgcolor: 'dark', color: 'white', mb: 3 }}>
      <CardContent>
        <Typography variant='h5'>{skill}</Typography>
      </CardContent>
    </Card>
  </motion.div>
  )
}

export default SkillCard;