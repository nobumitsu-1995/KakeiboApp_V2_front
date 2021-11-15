import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
        margin: theme.spacing(1),
        minWidth: 120
        },
    })
    );

type Props = {
    label: string;
    name: string;
    value?: number | string;
    datas: {value: number | string, name: string}[];
    disabled: "disabled" | null;
    onChange?: any
};

const SelectForm: FC<Props> = (props) => {
    const classes = useStyles();
    
    return (
        <FormControl className={classes.formControl} size="small" {...props.disabled} >
            <InputLabel>{props.label}</InputLabel>
            <Select　value={props.value} name={props.name} onChange={props.onChange}>
            {props.datas.map((data: {value: number | string, name: string}) => (
                <MenuItem key={data.value} value={data.value}>
                {data.name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
};

export default SelectForm;