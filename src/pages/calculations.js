import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Nav, NavbarContainer, NavLogo, LogoIcon } from '../components/Navbar/NavbarElements';
import { FcEngineering } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/first.png';
import image2 from '../images/second.png';

const TableContainer = styled.div`
  max-width: 800px;
  margin-top: 20px;
  overflow-x: auto;
  max-height: 300px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  padding-bottom: 100px;
  background-color: #000;
  background-size: cover;
  color: white;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding-bottom: 60px;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  border: 1px solid #ddd;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: black;
  background-color: white;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #ff9500;
  color: black;
  border: none;
  cursor: pointer;
`;

const StyledTableContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Calculations = () => {
  const [showTable, setShowTable] = useState(false);
  const dimensionsRef = useRef(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [tableData, setTableData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [materialOption, setMaterialOption] = useState(1);

  const isInputEmpty = input1.trim() === '' || input2.trim() === '';

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownChange = (event) => {
    setMaterialOption(Number(event.target.value));
  };

  const handleClear = () => {
    setInput1('');
    setInput2('');
    setTableData(null);
    setShowTable(false);
  };

  const handleScrollToDimensions = () => {
    if (dimensionsRef.current) {
      dimensionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateThickness = (pressure, volume) => {
    let relation;
    if (pressure <= 1.72369) {
      relation = 3;
    } else if (pressure <= 3.44738 && pressure > 1.72369) {
      relation = 4;
    } else {
      relation = 5;
    }
    const r = Number((Math.cbrt(volume / (2 * relation * Math.PI))).toFixed(2));
    const l = Number((volume / (r * Math.PI * r)).toFixed(2));
    return { r, l };
  };

  const calculateMaxPressure = (ts, r, materialOption) => {
    const allowablestress = calculateAllowableStress(materialOption);
    const denominator = (0.81 * 1000) + (0.6 * ts);
    const maxPressure = ((allowablestress * 0.7 * ts) / denominator) / 1000000;
    return maxPressure.toFixed(2);
  };

  const calculateShellThickness = (pressure, r, materialOption) => {
    const allowablestress = calculateAllowableStress(materialOption);
    const numerator = 1.705 * 10**6 * 0.81;
    const denominator = allowablestress * 0.7 - (0.6 * 1.705 * 10**6);
    const ts = ((numerator / denominator) * 1000) + 0.003;
    return ts.toFixed(2);
  };

  const calculateHoopStress = (pressure, r, ts) => {
    const hoopStress = (pressure * 10**6 * 2 * r) / (2 * ts / 1000);
    return hoopStress.toFixed(2);
  };

  const calculateLongitudinalStress = (pressure, r, ts) => {
    const longitudinalStress = (pressure * 10**6 * 2 * r) / (4 * ts / 1000);
    return longitudinalStress.toFixed(2);
  };

  const calculateSphericalRadius = (r) => {
    const sphericalRadius = 0.9 * 2 * r;
    return sphericalRadius.toFixed(2);
  };

  const calculateNeckRadius = (r) => {
    const neckRadius = 0.17 * 2 * r;
    return neckRadius.toFixed(2);
  };

  const calculateHeadHeight = (r) => {
    const headHeight = (2 * r) / 4;
    return headHeight.toFixed(2);
  };

  const calculateHeadThickness = (pressure, r, materialOption) => {
    const allowablestress = calculateAllowableStress(materialOption);
    const numerator = pressure * 10**6 * 2 * r;
    const denominator = (2 * allowablestress * 0.7) - (0.2 * pressure * 10**6);
    const headThickness = (numerator / denominator);
    return headThickness.toFixed(2);
  };

  const calculateMaxPressureOnHead = (headThickness, r, materialOption) => {
    const allowablestress = calculateAllowableStress(materialOption);
    const numerator = 2 * allowablestress * 0.7 * headThickness;
    const denominator = 2 * r + (0.2 * headThickness);
    const maxPressureOnHead = (numerator / denominator) / 1000000;
    return maxPressureOnHead.toFixed(2);
  };

  const calculateExternalNozzleDiameter = () => {
    const R = 88.75;
    const Dn = 2 * R;
    return Dn.toFixed(2);
  };

  const calculateNozzleThickness = (pressure, r, materialOption) => {
    const allowablestress = calculateAllowableStress(materialOption);
    const tn = (pressure * 10**6 * r) / (allowablestress * 0.7 - 0.6 * pressure * 10**6) * 1000;
    return tn.toFixed(6);
  };

  const calculateInternalNozzleDiameter = (Dn, tn) => {
    const dn = parseFloat(Dn) - 2 * (parseFloat(tn) + 3);
    return dn.toFixed(2);
  };

  const calculateNozzleOnTankWallDiameter = (dn, tn) => {
    const ds = parseFloat(dn) + 2 * parseFloat(tn);
    return ds.toFixed(2);
  };

  const calculateActualNozzleThickness = (Dn, dn) => {
    const Tn = (parseFloat(Dn) - parseFloat(dn)) / 2;
    return Tn.toFixed(2);
  };

  const calculateNozzleHoleArea = (dn, ts) => {
    const Ar = parseFloat(dn) * parseFloat(ts);
    return Ar.toFixed(2);
  };

  const calculateConnectingArea = (Dn, ts, Ts, Tn) => {
    const As = parseFloat(Dn) * (parseFloat(Ts) - parseFloat(ts)) - 2 * parseFloat(Tn) * (parseFloat(Ts) - parseFloat(ts));
    return As.toFixed(2);
  };

  const calculateAreaNozzleWall = (Tn, tn) => {
    const An = 2 * (2.5 * 15 * (parseFloat(Tn) - parseFloat(tn)));
    return An.toFixed(3);
  };

  const calculateNozzleHeight = () => {
    const Y = 2.5 * 15;
    return Y.toFixed(2);
  };

  const calculateAllowableStress = (materialOption) => {
    let tensileStrength;

    switch (materialOption) {
      case 1:
        tensileStrength = 484 * 10**6;
        break;
      case 2:
        tensileStrength = 450 * 10**6;
        break;
      case 3:
        tensileStrength = 515 * 10**6;
        break;
      default:
        throw new Error('Invalid material option');
    }

    const allowableStress = (1 / 3.5) * tensileStrength;
    return allowableStress;
  };

  const handleCalculate = () => {
    const pressure = Number(input1);
    const volume = Number(input2);
    const { r, l } = calculateThickness(pressure, volume);
    const ts = calculateShellThickness(pressure, r, materialOption);
    const maxP = calculateMaxPressure(ts, r, materialOption);
    const lStress = calculateLongitudinalStress(pressure, r, ts);
    const hStress = calculateHoopStress(pressure, r, ts);
    const headHeight = calculateHeadHeight(r);
    const sphericalRadius = calculateSphericalRadius(r);
    const neckRadius = calculateNeckRadius(r);
    const headThickness = calculateHeadThickness(pressure, r, materialOption);
    const maxPressureOnHead = calculateMaxPressureOnHead(headThickness, r, materialOption);
    const externalNozzleDiameter = calculateExternalNozzleDiameter();
    const nozzleThickness = calculateNozzleThickness(pressure, r, materialOption);
    const internalNozzleDiameter = calculateInternalNozzleDiameter(externalNozzleDiameter, nozzleThickness);
    const nozzleOnTankWallDiameter = calculateNozzleOnTankWallDiameter(internalNozzleDiameter, nozzleThickness);
    const actualNozzleThickness = calculateActualNozzleThickness(externalNozzleDiameter, internalNozzleDiameter);
    const nozzleHoleArea = calculateNozzleHoleArea(internalNozzleDiameter, ts);
    const connectingArea = calculateConnectingArea(externalNozzleDiameter, ts, 15, actualNozzleThickness);
    const nozzleWallArea = calculateAreaNozzleWall(actualNozzleThickness, nozzleThickness);
    const maxAllowableStress = calculateAllowableStress(materialOption);
    const diameter = r * 2;
    const Y = calculateNozzleHeight();

    const tableData = [
      { parameter: 'Nozzle height (Y)', value: `${Y} m` },
      { parameter: 'Area of nozzle wall (An)', value: `${nozzleWallArea} mm²` },
      { parameter: 'Area of connecting region (As)', value: `${connectingArea} mm²` },
      { parameter: 'Area of nozzle hole (Ar)', value: `${nozzleHoleArea} mm²` },
      { parameter: 'Actual nozzle thickness (Tn)', value: `${actualNozzleThickness} mm` },
      { parameter: 'Diameter of nozzle on tank wall (ds)', value: `${nozzleOnTankWallDiameter} mm` },
      { parameter: 'Internal nozzle diameter (dn)', value: `${internalNozzleDiameter} mm` },
      { parameter: 'Required nozzle thickness (tn)', value: `${nozzleThickness} mm` },
      { parameter: 'External nozzle diameter (Dn)', value: `${externalNozzleDiameter} mm` },
      { parameter: 'Maximum pressure on head', value: `${maxPressureOnHead} MPa` },
      { parameter: 'Internal radius (r)', value: `${r} m` },
      { parameter: 'Length (l)', value: `${l} m` },
      { parameter: 'Shell thickness (ts)', value: `${ts} mm` },
      { parameter: 'Hoop stress', value: `${hStress} Pa` },
      { parameter: 'Longitudinal stress', value: `${lStress} Pa` },
      { parameter: 'Design pressure', value: `${maxP} MPa` },
      { parameter: 'Spherical radius', value: `${sphericalRadius} m` },
      { parameter: 'Neck radius', value: `${neckRadius} m` },
      { parameter: 'Head height', value: `${headHeight} m` },
      { parameter: 'Head thickness', value: `${headThickness} m` },
      { parameter: 'Allowable Stress', value: `${maxAllowableStress} Pa` },
      { parameter: 'Diameter', value: `${diameter} m` },
    ];

    setShowTable(true);
    handleScrollToDimensions();
    setTableData(tableData);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <LogoIcon>
              <FcEngineering />
            </LogoIcon>
            Pressure Vessel
          </NavLogo>
        </NavbarContainer>
      </Nav>
      <Container>
        <Title>Design your pressure vessel</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Input
                type="number"
                value={input1}
                onChange={e => setInput1(e.target.value)}
                placeholder="Enter pressure (MPa)"
              />
              <Input
                type="number"
                value={input2}
                onChange={e => setInput2(e.target.value)}
                placeholder="Enter volume (m³)"
                style={{ marginLeft: '20px' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
              <select
                style={{
                  height: '40px',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  padding: '0 10px',
                  color: '#333',
                  backgroundColor: '#fff'
                }}
                onChange={handleDropdownChange}
              >
                <option value="1">SA-516 Gr70</option>
                <option value="2">SA662 Grade A</option>
                <option value="3">Stainless Steel Grade 304LN (UNS S30453)</option>
              </select>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <button
                  onClick={handleClear}
                  style={{
                    border: 'none',
                    padding: '10px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '20px',
                    backgroundColor: 'transparent'
                  }}
                >
                  <FontAwesomeIcon icon={faRedo} style={{ color: 'orange' }} size="2x" />
                </button>
                <button
                  onClick={handleCalculate}
                  disabled={isInputEmpty}
                  style={{
                    borderRadius: '4px',
                    backgroundColor: 'orange',
                    color: 'black',
                    padding: '10px',
                    border: 'none',
                    boxShadow: 'none',
                    cursor: isInputEmpty ? 'not-allowed' : 'pointer'
                  }}
                >
                  Calculate
                </button>
              </div>
              {showTable && (
                <div ref={dimensionsRef}>
                  <TableContainer>
                    <StyledTableContainer>
                      <Table>
                        <thead>
                          <tr>
                            <Th>Parameter</Th>
                            <Th>Value</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData &&
                            tableData.map((row, index) => (
                              <tr key={index}>
                                <Td>{row.parameter}</Td>
                                <Td>{row.value}</Td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </StyledTableContainer>
                  </TableContainer>
                </div>
              )}
            </div>
          </div>
        </div>
        <ContentContainer>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
            <StyledImage src={image1} alt="Description of the first image" />
            <StyledImage src={image2} alt="Description of the second image" />
          </div>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Calculations;