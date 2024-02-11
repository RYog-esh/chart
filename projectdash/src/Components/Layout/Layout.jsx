import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './layout.scss';
import MetricsBarChart from '../BarChart/MetricsBarChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faGreaterThan,
	faArrowRightLong,
	faDownload,
	faTableColumns,
	faMagnifyingGlassChart,
	faPlus,
	faBookmark
} from '@fortawesome/free-solid-svg-icons'
import TableData from '../Tabledata/TableData';
//import { useSelector } from 'react-redux';

const Layout = (props) => {
	// const barDataReceived = useSelector((receivedData) => {
	// 	return receivedData.barData
	// })
	const [showDashboard, setShowDashboard] = useState(true);
	const [showAnalysis, setShowAnalysis] = useState(false);
	const showDashboardClick = () => {
		setShowDashboard(true);
		setShowAnalysis(false);
	}
	const showAnalysisClick = () => {
		setShowAnalysis(!showAnalysis);
	}
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md='2' className='options-section'>
									<div className='options-div'>
										<p className= 'active' onClick={showDashboardClick}> <FontAwesomeIcon icon={faTableColumns} /> Dashboard</p>
										<p className='rightArrowParent' onClick={showAnalysisClick}> <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Analysis <span className='rightArrow'> <FontAwesomeIcon icon={faGreaterThan} /> </span></p>
										{
											showAnalysis && 
											<>
												<p className='analysisOptions'> <FontAwesomeIcon icon={faPlus} /> Add a Connection</p>
												<p className='analysisOptions'> <FontAwesomeIcon icon={faBookmark} /> Saved Connection</p>
											</>
										}
									</div>
                </Col>
								<Col md='10' className='dashboard-section'>
									{
										showDashboard && 
											<>
												<Row>
												<Col md='6'>
												<h3>Dashboard</h3>
												</Col>
												<Col md='6' className='downloadReport'>
												<span> <FontAwesomeIcon icon={faDownload} /> Download Report</span>
												</Col>
												</Row>
												<Col md='12' className='divs'>
													<Row>
														{
															props.data.map((datas, i) => {
																return (
																	<Col md='3' key={i}>
																		<div className='viewMore'>
																			<p>
																				{
																					datas.divtitle
																				}
																			</p>
																			<h5>
																				{
																					datas.counting
																				}
																			</h5>
																			<hr/>
																			<p className='cta'>
																				{
																					datas.cta
																				}
																				<span>
																				<FontAwesomeIcon icon={faArrowRightLong} />
																				</span>
																			</p>
																		</div>
																	</Col>
																)
															})
														}
													</Row>
													<Row>
														<Col md='5' className='bar-sec pad-mar'>
															<div className='boxShadow'>
																<h4>Allocation per day</h4>
																<MetricsBarChart />
															</div>
														</Col>
														<Col md='7' className='table-sec pad-mar'>
															<div className='boxShadow'>
																<h4>Resource Available</h4>
																<TableData />
															</div>
														</Col>
													</Row>
												</Col>
										 	</>
									}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Layout