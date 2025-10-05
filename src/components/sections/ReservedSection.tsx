'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { weddingConfig } from '../../config/wedding-config';
import Image from 'next/image';

interface DateSectionProps {
  bgColor?: 'white' | 'beige';
}

const ReservedSection = ({ bgColor = 'white' }: DateSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingConfig.reserved.openDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <DateSectionContainer $bgColor={bgColor}>
      <SectionTitle>모바일 청첩장 오픈 예정일</SectionTitle>

      <WeddingDate>
        {weddingConfig.reserved.openDate.toLocaleDateString('ko-KR')}
      </WeddingDate>

      <Image
        src="/images/28a116f8dfccaa9e378a0deacc1ebf24f43ad912ad8dd55b04db6a64cddaf76d.gif"
        alt='공사중...'
        width={360}
        height={360}
        quality={90}
        style={{ objectFit: 'contain', background: 'transparent' }}/>

      {weddingConfig.reserved.enabled && (
        <CountdownContainer>
          <CountdownTitle>오픈까지 남은 시간</CountdownTitle>

          <CountdownWrapper>
            <CountdownItem>
              <CountdownValue>{timeLeft.days}</CountdownValue>
              <CountdownLabel>일</CountdownLabel>
            </CountdownItem>
            <VerticalDivider />
            <CountdownItem>
              <CountdownValue>
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </CountdownValue>
              <CountdownLabel>시간</CountdownLabel>
            </CountdownItem>
            <VerticalDivider />
            <CountdownItem>
              <CountdownValue>
                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
              </CountdownValue>
              <CountdownLabel>분</CountdownLabel>
            </CountdownItem>
            <VerticalDivider />
            <CountdownItem>
              <CountdownValue>
                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </CountdownValue>
              <CountdownLabel>초</CountdownLabel>
            </CountdownItem>
          </CountdownWrapper>
        </CountdownContainer>
      )}
    </DateSectionContainer>
  );
};

const DateSectionContainer = styled.section<{ $bgColor: 'white' | 'beige' }>`
  padding: 4rem 1.5rem;
  text-align: center;
  background-color: ${props => props.$bgColor === 'beige' ? '#F8F6F2' : 'white'};
`;

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--secondary-color);
  }
`;

const CalendarCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  padding: 1.5rem;
  margin-bottom: 2rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    border: none;
    background: none;
    color: #999;
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
      color: #333;
    }
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  text-align: center;
`;

const DayName = styled.div<{ $isWeekend?: string }>`
  color: ${props =>
    props.$isWeekend === 'sun' ? '#e57373' :
    props.$isWeekend === 'sat' ? '#64b5f6' :
    'inherit'
  };
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Day = styled.div<{ $isWeekend?: string }>`
  color: ${props =>
    props.$isWeekend === 'sun' ? '#e57373' :
    props.$isWeekend === 'sat' ? '#64b5f6' :
    'inherit'
  };
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const WeddingDay = styled.div`
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 0.875rem;
`;

const CountdownContainer = styled.div`
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 600px) {
    overflow-x: none;
  }
`;

const CountdownTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  min-width: fit-content;
  margin: 0 auto;

  @media (max-width: 400px) {
    transform: scale(0.95);
    transform-origin: center center;
  }

  @media (max-width: 370px) {
    transform: scale(0.8);
    transform-origin: center center;
  }

  @media (max-width: 340px) {
    transform: scale(0.65);
    transform-origin: center center;
  }

  @media (max-width: 300px) {
    transform: scale(0.5);
    transform-origin: center center;
  }
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

const CountdownValue = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: var(--secondary-color);
  font-family: 'Courier New', monospace;
  min-width: 3rem;
  text-align: center;
  display: inline-block;

  @media (max-width: 480px) {
    font-size: 1.85rem;
    min-width: 2.5rem;
  }
`;

const CountdownLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-medium);
  margin-top: 0.25rem;
  white-space: nowrap;
`;

const VerticalDivider = styled.div`
  height: 4.5rem;
  width: 1px;
  min-width: 1px;
  flex-shrink: 0;
  background-color: var(--secondary-color);
  margin: 0 0.75rem;
  opacity: 0.8;

  @media (max-width: 480px) {
    height: 3.75rem;
    margin: 0 0.25rem;
    width: 0.5px;
  }
`;

const WeddingDate = styled.p`
  font-size: 1.25rem;
  margin-top: 2rem;
`;

export default ReservedSection;