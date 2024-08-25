import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const VulnerabilityData = {
  total: 1470,
  critical: 9,
  high: 150,
};

const ImageData = {
  total: 2,
  critical: 2,
  high: 0,
};

export default function Progess() {
  const vulnerabilityProgress = [
    { label: 'Critical', value: (VulnerabilityData.critical / VulnerabilityData.total) * 100 },
    { label: 'High', value: (VulnerabilityData.high / VulnerabilityData.total) * 100 },
    { label: 'Medium', value: 100 - (VulnerabilityData.critical / VulnerabilityData.total) * 100 - (VulnerabilityData.high / VulnerabilityData.total) * 100 },
  ];

  const imageProgress = [
    { label: 'Critical', value: (ImageData.critical / ImageData.total) * 100 },
    { label: 'High', value: (ImageData.high / ImageData.total) * 100 },
    { label: 'Medium', value: 100 - (ImageData.critical / ImageData.total) * 100 - (ImageData.high / ImageData.total) * 100 },
  ];

  return (
    <div>
      <h2>Vulnerabilities</h2>
      {vulnerabilityProgress.map((progress, index) => (
        <div key={index}>
          <Typography variant="body2" color="text.secondary">{`${progress.label} (${VulnerabilityData[progress.label.toLowerCase()]})`}</Typography>
          <LinearProgressWithLabel value={progress.value} />
        </div>
      ))}

      <h2>Images</h2>
      {imageProgress.map((progress, index) => (
        <div key={index}>
          <Typography variant="body2" color="text.secondary">{`${progress.label} (${ImageData[progress.label.toLowerCase()]})`}</Typography>
          <LinearProgressWithLabel value={progress.value} />
        </div>
      ))}
    </div>
  );
}
 
// export default App;
