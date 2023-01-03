import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styles from "./SwitchApp.module.css";

const SwitchApp = () => {
  return (
    <div className={styles.switchApp}>
      <img className={styles.backgroundIcon} alt="" src="../image@2x.png" />
      <h2 className={styles.output}>Output</h2>
      <h1 className={styles.title}>Pokémon Switch Library</h1>
      <iframe className={styles.output1} />
      <img
        className={styles.testPictureIcon}
        alt=""
        src="../switch-picture@2x.png"
      />
      <div className={styles.serialSettingsWrapper} />
      <p className={styles.comPort}>{`COM Port :    `}</p>
      <p className={styles.cameraId}>{`Camera ID :    `}</p>
      <h2 className={styles.serialSettings}>Serial Settings</h2>
      <Button
        className={styles.comPortReloadWrapper}
        sx={{ width: 110, height: 42 }}
        variant="contained"
        color="primary"
      >
        Reload
      </Button>
      <Button
        className={styles.cameraIdReloadWrapper}
        sx={{ width: 110 }}
        variant="contained"
        color="primary"
      >
        Reload
      </Button>
      <div className={styles.commandSettingsWrapper} />
      <h2 className={styles.commandSettings}>Command Settings</h2>
      <Button
        className={styles.commandStartWrapper}
        sx={{ width: 110 }}
        variant="contained"
        color="primary"
      >
        Start
      </Button>
      <Button
        className={styles.resetWrapper}
        sx={{ width: 110 }}
        variant="contained"
        color="secondary"
      >
        Reset
      </Button>
      <FormControl
        className={styles.automationSelect}
        sx={{ width: 223 }}
        variant="filled"
      >
        <InputLabel color="primary">Manual</InputLabel>
        <Select color="primary" size="medium" label="Manual" />
        <FormHelperText />
      </FormControl>
      <FormControlLabel
        className={styles.automationWrapper}
        label="Automation"
        labelPlacement="end"
        control={<Checkbox color="primary" defaultChecked size="medium" />}
      />
      <FormControlLabel
        className={styles.manualWrapper}
        label="Manual"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControl
        className={styles.cameraIdSelect}
        sx={{ width: 131, height: 5 }}
        variant="filled"
      >
        <InputLabel color="primary">0</InputLabel>
        <Select color="primary" size="medium" label="0" />
        <FormHelperText />
      </FormControl>
      <FormControl
        className={styles.comPortSelect}
        sx={{ width: 131 }}
        variant="filled"
      >
        <InputLabel color="primary">0</InputLabel>
        <Select color="primary" size="medium" label="0" />
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default SwitchApp;
