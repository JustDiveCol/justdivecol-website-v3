import { diveSites } from '../entities/divesites';
import { sessions } from '../entities/sessions';

describe('Business rules', () => {
  it('startDate < endDate', () => {
    sessions.forEach((s) =>
      expect(new Date(s.startDate).getTime()).toBeLessThan(
        new Date(s.endDate).getTime()
      )
    );
  });

  it('seatsAvailable ≤ capacity', () => {
    sessions.forEach((s) =>
      expect(s.seatsAvailable).toBeLessThanOrEqual(s.capacity)
    );
  });

  it('maxDepth > 0', () => {
    diveSites.forEach((s) => expect(s.maxDepthMeter).toBeGreaterThan(0));
  });
});
